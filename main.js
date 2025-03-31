$('form').on('submit',function(e){
    e.preventDefault ();

    const listaTarefa  = $('#nome-tarefa').val (); // const que recebe o valor do Input;
    const linhaTarefa = $('<li></li>');           //  const que cria uma linha;

    $(`
        <li>${listaTarefa}</li>                    
        `).appendTo(linhaTarefa)                // A linha recebe o valor da const 'linhaTarefa' e acrescenta na const 'listaTarefa'

    $(linhaTarefa).appendTo(`ul`)              // O valor recebido e acrescentado no HTML
    $('#nome-tarefa').val ('');                // Limpa o input
    
    $(linhaTarefa).click(function(){
        $(linhaTarefa).css('text-decoration','line-through');
        })                                    // A linha quando recebe o click recebe o efeito

})