import React from "react";
import ShinyText from "../components/ui/ShinyText";

export default function Demo() {
  return (
    <div>
      <ShinyText 
        text="Our gym provides top-class equipment and unique facilities, including Nigeria’s first hotel padel and pickleball courts, ensuring a complete fitness experience in Abuja. With five diverse dining outlets—from local flavors to international cuisine at Papillon, Obudu Grill, Soho, Pool Bar, and Lobby Bar—we cater to every taste. We also offer versatile spaces perfect for hosting memorable occasions and events." 
        disabled={false} 
        speed={3} 
        className="custom-class" 
      />
    </div>
  );
}
