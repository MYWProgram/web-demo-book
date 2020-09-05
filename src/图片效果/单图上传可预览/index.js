import './index.css';

const wrapper = document.querySelector('.wrapper');
const fileName = document.querySelector('.file-name');
const defaultBtn = document.querySelector('#default-btn');
const customBtn = document.querySelector('#custom-btn');
const cancelBtn = document.querySelector('#cancel-btn span');
const img = document.querySelector('img');
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
// * 点击上传按钮模拟点击 input.
customBtn.addEventListener('click', () => {
  defaultBtn.click();
});
defaultBtn.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      img.src = result;
      // * 有图片时添加 class.
      wrapper.classList.add('active');
    };
    cancelBtn.addEventListener('click', () => {
      img.src = '';
      wrapper.classList.remove('active');
    });
    // * 读取指定的 Blob 或 File 对象；读取操作完成的时候，readyState 会变成已完成 DONE，并触发 loadend 事件，同时 result 属性将包含一个 data: URL 格式的字符串（base64编码）以表示所读取文件的内容。
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStore = this.value.match(regExp);
    // * 文件名显示。
    fileName.textContent = valueStore;
  }
});
