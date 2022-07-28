const main = document.querySelector('main');
const countryInput = document.querySelector('.country_input');
const insertCountryChild = document.querySelector('.insert_country_child');
const searchBtn = document.querySelector('.search_btn')
const getGlobal = async function () {
    const global = await fetch('https://covid-19.dataflowkit.com/v1/world');
    const resp = await global.json();
    const data = await resp;
    console.log(data);

    const html = `        
        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-CkjeCuGUrtoHXsrlvymK8HcXOjXaUHWVbmNPffqb1Gfj3uddIO6MKOz-2Qa2g1GWxQ&usqp=CAU" alt="" class="card_img">
            <div class="card_txt">
                <h2>World Result</h2>
                <ul>
                    <li>New Cases: <span class="main_stat">${data['New Cases_text']}</span></li>
                    <li>New Deaths: <span class="main_stat">${data['New Deaths_text']}</span></li>
                    <li>Total Cases: <span class="main_stat">${data['Total Cases_text']}</span></li>
                    <li>Total Deaths: <span class="main_stat">${data['Total Deaths_text']}</span></li>
                    <li>Total Recovered: <span class="main_stat">${data['Total Recovered_text']}</span></li>
                </ul>
            </div>
        </div>
    `;
    main.insertAdjacentHTML('beforeend', html)
}
getGlobal();
