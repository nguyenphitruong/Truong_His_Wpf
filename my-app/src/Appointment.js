import {tSConstructorType} from '@babel/types';
import axios, { Axios } from 'axios';
import React,{Component} from 'react';
//import {variables} from './Variables';

export class Appointment extends Component{

    // constructor(props){
    //     super(props);

    //     this.state={
    //         lstAppontment:[]
    //     }
    // }

    state = {
        lstAppontment:[]
    }

    async componentDidMount(){
        let res = await axios.get('http://localhost:7770/api/EMR/v1/Appointment/AppointmentOperations');
        this.setState({
            lstAppontment: res && res.data && res.data.data?res.data.data : []
        })
    }
    render(){
        let{lstAppontment} = this.state;
        return(
            <div className="list-uer-container">
                {lstAppontment && lstAppontment.length>0 && lstAppontment.map((item, index)=>{
                    return(
                        <div className="child" key={item.idline}>
                            {index+1} -{item.idline} -{item.hospcode} -{item.fullname}

                </div>
                    )
                })}
                
            </div>
        )
    }
    // constructor(props){
    //     super(props);

    //     this.state={
    //         appointments:[]
    //     }
    // }

    // refreshList(){
    //     fetch(variables.API_URL+'AppointmentOperations')

    //     .then(response=>response.json())
    //     .then(data =>{
    //         this.setState({appointments:data});
    //     });
    // }
    // componentDidMount(){
    //     this.refreshList();
    // }
    
    // render(){
    //     const{
    //         appointments
    //     }=this.state;
    //     return(
    //         <div>
    //             <table className="table table-striped">
    //                 <thead>
    //                     <tr>
    //                         <th>
    //                         idline
    //                         </th>
    //                         <th>
    //                         hospcode
    //                         </th>
    //                         <th>
    //                         fullname
    //                         </th>
    //                     </tr>
    //                 </thead>

    //                 <tbody>
    //                     {appointments.map(ap=>
    //                         <tr key={ap.idline}>
    //                             <td>{ap.idline}</td>
    //                             <td>{ap.hospcode}</td>
    //                             <td>{ap.fullname}</td>
    //                         </tr>
    //                         )}
    //                 </tbody>
    //             </table>

    //         </div>
    //     )
    // }
}