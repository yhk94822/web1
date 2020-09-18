isElementUnderBottom = (elem, triggerDiff) => {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}

handleScroll = () => {
    const elems = document.querySelectorAll('.mainDiv');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(70px)';
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
      }
    })
}

window.addEventListener('scroll', handleScroll);

const platform = 'steam';
const playerName = 'Etc_Hoons';

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMjk1ZTQ2MC1kYmQ3LTAxMzgtMjViYS02OTdhNWQ2ZGY2YzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjAwNDMxNzg4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImFycGNsYW4ifQ.cmVihwpRsp9D6bH22DEPrH2wT4j2regZHnGDDZChjtQ");

fetch('https://api.pubg.com/shards/'+platform+'/players?filter[playerNames]='+playerName ,{"headers":myHeaders})
.then((res) => res.json())
.then((data) => {
    console.log(data);
    //document.getElementById('battlegroundAPI').innerHTML = tag;
    

    //document.getElementById('apply_div').innerHTML = tag;
    // if (data.status !== 200) alert('에러!')
    // else {
    //     for (let hub of data.arr) {
    //     tag += '<p>' + hub.addr + '</p>';
    //     }
    //     document.getElementById('hub_list').innerHTML = tag;
    // }
});


// api:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMjk1ZTQ2MC1kYmQ3LTAxMzgtMjViYS02OTdhNWQ2ZGY2YzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjAwNDMxNzg4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImFycGNsYW4ifQ.cmVihwpRsp9D6bH22DEPrH2wT4j2regZHnGDDZChjtQ
