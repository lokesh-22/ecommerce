import Card from "../components/Card";
// import products from "../assets/products";
import { useState,useEffect } from "react";


export default function Products() {

     const [products, setProducts] = useState([])
     const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
      const [showSnackbar, setShowSnackbar] = useState(false);

      useEffect(() => {
        fetch('https://sjib4jut7c.execute-api.eu-north-1.amazonaws.com/products/prducts')
          .then(response=>{
            if(!response.ok){
              throw new Error('Something went wrong')
            }
                return response.json()
          }

          )
          .then((data) => {
            setProducts(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      },[]);

      if (loading) {
        return <>

<div class='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
 	<span class='sr-only'>Loading...</span>
  	<div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
</div>
        </>
      }

      if (error) {
        return <div>{error.message}</div>
      }

   

  const handleAddToCart = (product) => {
    // Assuming you have a way to add to the cart from here
    // addCart(product);

    // Show snackbar
    setShowSnackbar(true);
    

    // Hide snackbar after 3 seconds
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };


    return (
        <>
    {showSnackbar && (
        <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>Something happened that you should know about.</p>
      </div>)}
        
        <div class="m-2 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
            
            {
                products.map((product) => <Card product={product} onAddToCart={handleAddToCart} />)
                
            }
           


        </div>
        </>
    )
}