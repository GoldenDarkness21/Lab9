const render = () => {
    const botonComentario = document.querySelector('.boton-comentario');
    const modalComentario = document.querySelector('.modal-comentario');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const cuadroComentario = document.querySelector('.cuadro-comentario');
    const publicarComentario = document.querySelector('.publicar-comentario');
    const comentariosContenedor = document.querySelector('.comentarios');
    
    botonComentario.addEventListener('click', () => {
        modalComentario.style.display = 'block';
    });
    
    cerrarModal.addEventListener('click', () => {
        modalComentario.style.display = 'none';
    });
    
    cuadroComentario.addEventListener('input', () => {
        if (cuadroComentario.value.trim() !== '') {
            publicarComentario.style.backgroundColor = '#1877F2';
            publicarComentario.style.color = 'white';
            publicarComentario.style.cursor = 'pointer';
            publicarComentario.disabled = false;
        } else {
            publicarComentario.style.backgroundColor = 'gray';
            publicarComentario.style.color = 'black';
            publicarComentario.style.cursor = 'not-allowed';
            publicarComentario.disabled = true;
        }
    });
    
    publicarComentario.addEventListener('click', () => {
        const comentario = cuadroComentario.value;
        if (comentario.trim() !== '') {
            const nuevoComentario = document.createElement('div');
            nuevoComentario.classList.add('comentario');
            
            const postHeader = document.createElement('div');
            postHeader.classList.add('post-header');
            
            const postAvatar = document.createElement('div');
            postAvatar.classList.add('post-avatar');
            const avatarImage = document.createElement('img');
            avatarImage.src = 'principal.png';
            avatarImage.alt = 'Avatar del usuario';
            postAvatar.appendChild(avatarImage);
            
            const postAuthor = document.createElement('div');
            postAuthor.classList.add('post-author');
            postAuthor.textContent = 'Brandon Martinez'; 
            
            postHeader.appendChild(postAvatar);
            postHeader.appendChild(postAuthor);
            
            const postContent = document.createElement('div');
            postContent.classList.add('post-content');
            postContent.textContent = comentario;
            
            nuevoComentario.appendChild(postHeader);
            nuevoComentario.appendChild(postContent);
            
            comentariosContenedor.appendChild(nuevoComentario);
            cuadroComentario.value = '';
            modalComentario.style.display = 'none';
        }
    });
    
    }
    
    
    window.onload= render
    