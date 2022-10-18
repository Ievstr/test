document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('scroll', window.scrollY > 0);
  });

  $('.header-burger').click(function () {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
    $('body').toggleClass('o-hidden');
  });

  $('.select-text').click(function () {
    $(this).toggleClass('active').next().slideToggle();
  });

  $('.select-dropdown__option').click(function () {
    var value = $(this).attr('data-select');
    $(this).addClass('active').closest('.select-dropdown').slideUp().end().closest('.select').find('.select-input').val(value).end().find('.select-text').toggleClass('active').find('span').text(value);
    $('.select-dropdown__option').not(this).removeClass('active');
  });

  $('.form-range').on('input', function () {
    let inputValue = $(this).val();
    let inputPercent = $(this).closest('.form-group').find('.form-group__percent span');

    inputPercent.text(inputValue);
  });

  $('.input-file').change(function (e) {
    let uploadFileName = e.target.files[0].name;
    let inputFileName = $(this).next('.input-file__name');

    inputFileName.text(uploadFileName);
  });

  new WOW().init();
});