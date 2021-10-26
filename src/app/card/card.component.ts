import { Datacenter } from './datacenter';
import { Infrastructure } from './infrastructure';
import { Stype } from './stype';
import { Host } from './host';

import { Currency } from './currency';
import { Component, OnInit } from '@angular/core';
import {  vmType } from './vmtype';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  howManyServers ='';

  currency : Currency[];
  curselected:String;
  
  vmtype: vmType[];
  vmtypeselected:String;
  
  host: Host[];
  hostselected:String;

  stype:Stype[];
  stypeselected:String;

  infrastructure: Infrastructure[];
  infrastructureselected : String;

  datacenter: Datacenter[];
  datacenterselected:String;

  vmdensity: '';
  additionalvm: '';
  timeframe:'';

  constructor() { }

  ngOnInit(): void {
    this.currency=[
      {Name:"Rupees"},
      {Name:"Dollar"},
      {Name:"Pounds"},
      {Name:"Yen"}
    ];
    this.curselected = "";

    this.vmtype=[
      {vmtype_Name:"vSphere Essentials"},
      {vmtype_Name:"vSphere Essesntials Plus"},
      {vmtype_Name:"vSphere Standard"},
      {vmtype_Name:"vSphere Enterprise Plus"},
      {vmtype_Name:"vCloud Suite Standard"},
      {vmtype_Name:"vCloud Suite Advanced"},
      {vmtype_Name:"vCloud Suite Enterprise"},
      
    ];

    this.vmtypeselected = "";


    this.host=[
      {host_des:"2 12-core CPUs, 64GB RAM",host_Name:"Server A"},
      {host_des:"2 14-core CPUs, 128GB RAM",host_Name:"Server B"},
      {host_des:"4 18-core CPUs, 512GB RAM",host_Name:"Server C"}
    ];

    this.hostselected = "";


    this.stype=[
      {stype_Name:"NAS",stype_des:"Assume storage cost of:",stype_cost:"$4.00/GB"},
      {stype_Name:"iSCSISAN",stype_des:"Assume storage cost of:",stype_cost:"$5.00/GB"},
      {stype_Name:"FC SAN",stype_des:"Assume storage cost of:",stype_cost:"$6.00/GB"}
    ]

      this.stypeselected="";


    this.infrastructure=[
      {infraName:"Low",infraCost:"$0.70 per kWh"},
      {infraName:"Medium",infraCost:"$0.106 per kWh"},
      {infraName:"High",infraCost:"$0.150 per kWh"},
    ];

    this.infrastructureselected="";


    this.datacenter=[
      {dataName:"Low",dataCost:"$147 per sq ft per year, fully burdened"},
      {dataName:"Medium",dataCost:"$290 per sq ft per year, fully burdened"},
      {dataName:"High",dataCost:"$428 per sq ft per year, fully burdened"}
    ]

    this.datacenterselected=""

  }
 
  

}
