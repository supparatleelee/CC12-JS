// Lab 4.10
const mapProvinceDistrict = {
  BANGKOK: ['BANGBON', 'BANGKHAE', 'BANGKAPI'],
  PHUKET: ['KATHU', 'THALANG'],
  RANONG: ['KRA BURI', 'KA POE']
};

const province = document.querySelector('#province');
province.addEventListener('change', function () {
  const district = document.querySelector('#district');
  const provinceSelected = province.value;
  const showDistricts = mapProvinceDistrict[provinceSelected] || [];
  // <option value="">SELECT</option>;
  // ['BANGBON', 'BANGKHAE', 'BANGKAPI']
  // '<option value="BANGBON">BANGBON</option><option value="BANGKHAE">BANGKHAE</option><option value="BANGKHAE">BANGKAPI</option>'
  // let str = '<option value="">SELECT</option>';
  // for (let el of showDistricts) {
  //   str += `<option value="${el}">${el}</option>`;
  // }
  let str =
    '<option value="">SELECT</option>' + showDistricts.map(el => `<option value="${el}">${el}</option>`).join('');
  district.innerHTML = str;
});