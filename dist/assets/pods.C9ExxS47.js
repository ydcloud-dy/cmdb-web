/*! 
 Build based on  
 Time : 1735190558000 */
import{a,q as e,o as t,c as o,cO as r}from"./index.ABWJOL2Q.js";import{i as l}from"./index.DrIIbIcU.js";const s={__name:"pods",props:{data:{default:function(){return{}},type:Object}},setup(s){const u=a(),i=s,n=a([]),p=a([]),d=a([]),v=a({});return v.value=i.data,v.value.podCapacity&&v.value.podCapacity.length>0&&v.value.podCapacity.forEach((function(a){n.value.push(r(a[0])),p.value.push(Math.round(100*parseFloat(a[1]))/100)})),v.value.podUsage&&v.value.podUsage.length>0&&v.value.podUsage.forEach((function(a){n.value.push(r(a[0])),d.value.push(Math.round(100*parseFloat(a[1]))/100)})),n.value=[...new Set(n.value)],e((()=>{var a,e;a=l(u.value),e={tooltip:{trigger:"axis",formatter:function(a){var e=a[0].axisValue+"<br/>";return a.forEach((function(a){e+=a.marker+a.seriesName+"："+a.data+" 个<br/>"})),e},axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Capacity","Usage"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"4%",right:"3%",bottom:"3%",containLabel:!0},xAxis:[{data:n.value}],yAxis:[{type:"value",axisLabel:{formatter:"{value} 个"}}],series:[{name:"Capacity",type:"line",areaStyle:{},data:p.value},{name:"Usage",type:"line",areaStyle:{},data:d.value}]},a.setOption(e)})),(a,e)=>(t(),o("div",{ref_key:"main",ref:u,style:{width:"1000px",height:"400px"}},null,512))}};export{s as _};