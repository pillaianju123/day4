import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

  district:any = [
    {
      id:1,
      title: "Trivandram",
      image: "https://images.unsplash.com/photo-1614090699960-b4c81be49f3c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhpcnV2YW5hbnRoYXB1cmFtfGVufDB8fDB8fHww",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:2,
      title: "Alappuzha",
      image: "https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.webp?b=1&s=170667a&w=0&k=20&c=BVVxjzeqLdreKBP1dM6iE-6Q7P1nHd2EQx_EbmD9Cac=",
      dis:"Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event."
    },
    {
      id:3,
      title: "Idukki",
      image: "https://images.pexels.com/photos/14844301/pexels-photo-14844301.jpeg?cs=srgb&dl=pexels-nandhu-kumar-14844301.jpg&fm=jpg",
      dis:"Idukki is a township in Idukki district near to the district headquarter Painavu in the state of Kerala, southern India. The township consists of the towns of Cheruthoni, Painavu, Thadiyampadu, Idukki proper and Vazhathope. Idukki town is an administrative town but the district headquarters is located at Painavu"
    },
    {
      id:4,
      title: "Ernakulam",
      image: "https://t3.ftcdn.net/jpg/02/62/01/82/360_F_262018261_2PlFN20duQGypDDyZCnrlLf4w1Tz4ngw.jpg",
      dis:"Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. Shops along Broadway and on MG Road sell fabrics, crafts, and spices, while modern Lulu Mall also has a cinema and an ice rink. Simple eateries serve Keralan specialties and South Indian seafood"
    
    },  
    {
      id:5,
      title: "Palakkad",
      image: "https://image3.mouthshut.com/images/Restaurant/Photo/-93951_7711.jpg",
      dis:"Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival. Northeast, near Malampuzha Dam, the town of Malampuzha has a rock garden created from recycled materials"
    },
 

]
constructor(public route:ActivatedRoute){}
ngOnInit(){
  this.getDetails();

}
id:any;
data:any;
getDetails(){
  this.id = this.route.snapshot.params["id"];
  this.data = this.district.filter((d:any)=>d.id == this.id)
}
}

