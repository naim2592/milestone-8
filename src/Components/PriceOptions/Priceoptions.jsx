import Priceoption from "./Priceoption";


const Priceoptions = () => {
   const priceOptions= [
        {
            "id": "1",
            "name": "Basic Plan",
            "price": 29.99,
            "billingCycle": "monthly",
            "features": [
                "Access to gym equipment",
                "Locker facilities",
                "One complimentary fitness consultation",
                "Access during regular hours (8 AM - 8 PM)"
            ]
        },
        {
            "id": "2",
            "name": "Standard Plan",
            "price": 49.99,
            "billingCycle": "monthly",
            "features": [
                "All Basic Plan features",
                "Unlimited group classes (Yoga, Zumba, etc.)",
                "Extended access hours (5 AM - 10 PM)",
                "1 guest pass per month"
            ]
        },
        {
            "id": "3",
            "name": "Premium Plan",
            "price": 79.99,
            "billingCycle": "monthly",
            "features": [
                "All Standard Plan features",
                "24/7 gym access",
                "Monthly personal training session",
                "Access to sauna and spa",
                "Premium locker access",
                "2 guest passes per month"
            ]
        },
        {
            "id": "4",
            "name": "Annual Saver",
            "price": 499.99,
            "billingCycle": "annually",
            "features": [
                "All Premium Plan features",
                "Exclusive annual discount",
                "Priority access to new classes and facilities",
                "Discount on personal training packages",
                "5 guest passes per month"
            ]
        }
    ]
    
    return (
        <div className="w-11/12 mx-auto">
            <h1>Explore Price option</h1>
           <div className="grid md:grid-cols-4 gap-5 ">
           {
                priceOptions.map(priceOption=><Priceoption key={priceOption.id} priceOption={priceOption}></Priceoption>)
            }
           </div>
        </div>
    );
};

export default Priceoptions;