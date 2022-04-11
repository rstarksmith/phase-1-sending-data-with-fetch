

function submitData(userName, userEmail) {
    const handleData = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail,
    })}
    return fetch('http://localhost:3000/users', handleData)

    .then(response => response.json())
    .then(function (object) {
    const body = document.querySelector('body')
    const p = document.createElement('p')
    p.textContent = object.id
    body.appendChild(p)
    })

    .catch(function(error) {
        console.log(error.message)
        const body = document.querySelector('body')
        const div = document.createElement('div')
        div.textContent = error.message
        body.appendChild(div)

    })
}

// submitData("Jerry", "jerry@gmail.com")





    
