require.config({
    baseUrl:'./',
    paths:{
        'jquery': 'lib/jquery/jquery-1.9.1.min',
        'fastClick':'lib/fastclick',
        'artTemplate':'lib/art-template/template-native'
    }
});
require(['fastClick','js/lcj'],function(fc){
    fc.attach(document.body);
});