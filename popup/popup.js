  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }


const tab = await getCurrentTab()

  const url = new URL(tab.url);

  const params = url.search.split('&');
  console.log(params)

  if (params.length > 1) {
    const list = document.createElement('ul')
    document.body.appendChild(list)
    createList(params)
  }



  
  function createList(params){
  const template = document.getElementById("li_template");

  let count = 0
  const elements = new Set();
  for (const param of params){
      const element = template.content.firstElementChild.cloneNode(true);

    // element.id =count
// element.querySelector(".title").textContent = param;

    const copybtn = document.createElement("button")
    copybtn.textContent = param
    copybtn.id = count
    copybtn.onclick = function () {
      navigator.clipboard.writeText(this.textContent)
         this.style.backgroundColor = "green"
    }
    element.appendChild(copybtn)


    elements.add(element);
    count ++;
  }
  document.querySelector("ul").append(...elements);

  

  }
