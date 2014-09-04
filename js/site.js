$(document).ready(function () {
	$('.fluid-container .panels').panelSnap({
    $menu: $('.fluid-container .sidebar-offcanvas .menu')
  });
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas, .sidebar-offcanvas').toggleClass('active')
  });
});