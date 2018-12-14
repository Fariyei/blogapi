$(document).ready(function () {
    detallepost();
    listausuarios();
});

function volveralistapost (){
    location.href="post.html";
}

function listausuarios() {
    var lista = $("#detallePost");

    var plantilla = `
        <div class="card-body">
            <h5 class="card-title">{titulo}</h5>
            <p class="card-text">{cuerpo}</p>
            <p>{email}</p>
            <p>{id}</p>
            <p>{name}</p>
            </div>
        </div>
        `
    var token = localStorage.getItem("token");
    var postId = localStorage.getItem("postId");

    fetch(`http://68.183.27.173:8080/post/${postId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(res => res.json())
        .then(response => {

            var post = response;
            var item = plantilla
                .replace('{titulo}', post.title)
                .replace('{cuerpo}', post.body)
                .replace('{email}', post.userEmail)
                .replace('{id}', post.postId)
                .replace('{name}', postId;


            lista.append(`${item}`);
            

        })
        .catch(error => console.error('Error:', error));

}
