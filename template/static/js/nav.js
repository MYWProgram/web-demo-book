
export function setToggleEvent() {
  $('#menu .list-header').click((ev) => {
    const listContent = ev.currentTarget.parentNode.children[1]
    const status = $(listContent).css('display')
    // 其他的先复原
    // $('#menu .list-content').slideUp(100)
    // $('#menu .list-header .iwowenf').css({transform: 'rotate(0deg)'})
    // 旋转箭头
    const arrow = ev.currentTarget.children[1]
    if (status === 'none') {
      $(arrow).css({transform: 'rotate(180deg)'})
    } else {
      $(arrow).css({transform: 'rotate(0deg)'})
    }

    // 收起打开子菜单
    $(listContent).slideToggle(100)

  })
}

// 在hashchange中使用，换nav颜色
export function setNavActive(name) {
  const type = name.split('_')[0]
  const activeHeader = $(`.${type}`)
  const activeItem = $(`.${name}`)

  // 先清除所有的动态颜色
  $('.list-header-active').removeClass('list-header-active')
  $('.list-item-active').removeClass('list-item-active')

  // 设置动态颜色
  activeHeader.addClass('list-header-active')
  activeItem.addClass('list-item-active')

  // 打开目录
  const folder = activeHeader.parent().children()
  const header = folder[0]
  const content = folder[1]
  $(content).show()
  const arrow = $(header).children()[1]
  $(arrow).css({transform: 'rotate(180deg)'})
}