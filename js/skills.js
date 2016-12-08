$(document).ready(function(){
  //Barra de progreso INTERMEDIO
  var bar = new ProgressBar.Line(progresoIntermedio, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 25000,
    color: '#26A69A',
    trailColor: '#A8A8A8',
    trailWidth: 6,
    svgStyle: {width: '80%', height: '100%'}
  });
  bar.setText('Intermedio');
  bar.animate(.50);
  bar.text.style.color = '#fffaf0';
  bar.text.style.fontSize = '1rem';
  bar.text.style.fontWeight ='bold';
  
  //Barra de progreso BASICO
  var bar = new ProgressBar.Line(progresoBasico, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 25000,
    color: '#26A69A',
    trailColor: '#A8A8A8',
    trailWidth: 6,
    svgStyle: {width: '80%', height: '100%'},
  });
  bar.setText('Básico');
  bar.animate(.35);
  bar.text.style.color = '#fffaf0';
  bar.text.style.fontSize = '1rem';
  bar.text.style.fontWeight ='bold';
	//Grafica de corazon
  var bar = new ProgressBar.Path('#heart-path', {
  easing: 'easeInOut',
  duration: 35000
  });
  bar.set(0);
  bar.animate(1.0);
});