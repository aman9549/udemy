import RecButton from "./RecButton"

const Recommended = () => {

    const categories = [
    "Android Development",
    "Kotlin Multiplatform",
    "Kotlin",
    "React Native",
    "Android Jetpack Compose",
    "Mobile App Development",
    "Android Studio",
    "Android Jetpack",
    "Android Game Development",
    "React JS"
  ];

  return (
    <>

    <div className="space-y-4">

    <h1 className="heading text-2xl">Topics recommended for you</h1>

    <div className="grid grid-cols-5 gap-3">
       
       {
        categories.map((item)=>{
                return(
                    
                    <RecButton key={item} label={item} />
                    
                )
        })
       }
    </div>
        
    </div>
       
    </>
  )
}

export default Recommended