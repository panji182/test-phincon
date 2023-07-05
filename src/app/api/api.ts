
export const getData = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json));
}

export const getAllUsers = () => {
  return fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>console.log(json))
}

export const loginUser = () => {
  return fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body: JSON.stringify({
            username: "johan",
            password: "johan123"
        })
    })
    .then(res=>res.json())
    .then(json=>console.log("login => ", json))
}

export const addUser = () => {
  return fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email:'Johan@gmail.com',
                username:'johan',
                password:'johan123',
                name:{
                    firstname:'Johan',
                    lastname:'Saimima'
                },
                address:{
                    city:'Kolkata',
                    street:'cipayung no 18',
                    number:7,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7035'
            }
        )
    })
      .then(res=>res.json())
      .then(json=>console.log(json))
}