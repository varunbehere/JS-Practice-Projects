console.log('Connected!!')

document.querySelector('button').addEventListener('click', function(e){
    console.log('BUtton');
    const xhr = new XMLHttpRequest()
    const requestURL = 'https://api.github.com/users/varunbehere'
    xhr.onreadystatechange = function(){
        if (this.readyState === 1){
            alert('Connection Succesfull !')
        }
        else if (this.readyState === 4){
            const responseData = JSON.parse(this.responseText)
            setTimeout(() => {
                document.querySelector('#avatar').src = responseData.avatar_url
                document.querySelector('#name').innerHTML = responseData.name
                document.querySelector('#userSince').textContent = `User Since ${new Date(responseData.created_at).toLocaleDateString()}`
                document.querySelector('#location').textContent = responseData.location
                document.querySelector('#bio').innerHTML = responseData.bio
                document.querySelector('#public_repo').innerHTML = responseData.public_repos.toString()
                // console.log(document.querySelector('#id'));
                // console.log(document.querySelector('#public_repo'));
                // console.log(responseData.bio);
                // console.log(responseData.public_repos);
            }, 1000);

        }       
    }
    xhr.open('GET',requestURL)
    xhr.send()
})