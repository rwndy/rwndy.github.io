// event pada link
$('.page-scroll').on('click', function(){

	//ambil isi
	var tujuan = $(this).attr('href');
	// tangkap element
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000);


});