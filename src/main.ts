import 'mdui'
import './config.ts'

import { setColorScheme } from 'mdui/functions/setColorScheme.js'
import { $ } from '@mdui/jq'
import { alert } from 'mdui/functions/alert'
import config from "./config.ts";

const showDialog = () => {
  alert({
    headline: "Title",
    description: "admin@androidide.cn",
    confirmText: "OK",
    onConfirm: function() {
      console.log("confirmed")
    }
  }).then(r => console.log(r));
}

const getConfigWeb = () => {
  $.each(config.WEB_LIST, function(_key, value) {
    let _element = `<mdui-card href="${value.url}" target="_blank"><div><div><img class="fadInAnimation" src="${value.icon}" alt="${value.desc}"/></div><p><strong>${value.name}</strong><span>${value.desc}</span></p></div></mdui-card>`;
    $('#content').append(_element);
  });
}

const setIcon = (id: any) => {
  $.ajax({
    method: 'GET',
    url: 'https://api.androidide.cn/github/repositories/icon?id=' + id,
    success: function(response) {
      if (response.code == 200) {
        let img = $(`#id_${id} img`);
        img.prop('src', response.data);
        img.addClass('fadInAnimation');
      }
    }
  }).then(r => console.log(r));
}

export function init(_element: HTMLElement) {
  console.log('init')
  if (config.CUSTOM_THEME_COLOR) setColorScheme(config.CUSTOM_THEME_COLOR)
  $.ajax({
    method: 'GET',
    url: 'https://api.github.com/orgs/AndroidIDE-CN/repos',
    success: function(response) {
      $.each(response, function(_key, value: any) {
        if (!config.LIST.includes(value.id)) {
          let _element = `<mdui-card href="${value.homepage}" target="_blank" id="id_${value.id}"><div><div><img alt="${value.description}"/></div><p><strong>${value.name.replace(/[-_]/g, ' ')}</strong><span>${value.description}</span></p></div></mdui-card>`;
          $('#content').append(_element)
          setIcon(value.id)
        }
      });
      getConfigWeb()
    }
  }).then(r => console.log(r))
  document.getElementById('showDialog')?.addEventListener('click', () => showDialog())
}
init(document.getElementById('app') as HTMLElement);