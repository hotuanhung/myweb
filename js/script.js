/** typing animation */
var typed = new Typed(".typing",
{
    strings:["HUSTのHEDSPIの学生","ウェブ開発者","ウェブデザイナー","アンドロイドのアプリ開発者"],
    typeSpeed: 150,
    backSpeed: 100,
    loop:true

})
/**aside */
const nav=document.querySelector(".nav"),
    navList= nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection=allSection.length;
    for(let i =0; i<totalNavList;i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {   
            for ( let i=0;i<totalSection;i++)
            {
                allSection[i].classList.remove("back-section");
            }
            for(let j=0; j<totalNavList;j++)
            {   if(navList[j].querySelector("a").classList.contains("active"))
                  { 
                      allSection[j].classList.add("back-section")
                  }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this)
        })
    } 
    function showSection(element)
    {   
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for( let i = 0;i<totalNavList;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            console.log(element.getAttribute("href").split("#")[1]);
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
          {
            navList[i].querySelector("a").classList.add("active");
          }
        }
        
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex=this.getAttribute("data-section-index");
        
        showSection(this);
        updateNav(this);
    })
    const navTogglerbtn = document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");
          navTogglerbtn.addEventListener("click", () =>
          {
            asideSectionTogglerBtn()
          })
          function asideSectionTogglerBtn()
          {
            aside.classList.toggle("open");
            navTogglerbtn.classList.toggle("open");
          }