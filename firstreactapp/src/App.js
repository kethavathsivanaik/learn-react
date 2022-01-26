import { IntroDetails } from "./Components/IntroDetails";
import { ProductCatalog } from "./Components/ProductCatalog";
import ProductCatalogClass from "./Components/ClassComponent";
export const App=(props)=>{
  return(
      /*<div>
        <IntroDetails intro={{cName:"Amazon", GstNo:"xya678"}}></IntroDetails>
        <ProductCatalog
          details={{
              imgSource:"https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w=",
              prodLink:"https://www.amazon.in/s?i=electronics&bbn=976419031&rh=p_6%3AA14CZOWI0VEHLG%2Cp_89%3AMivi&hidden-keywords=B093LN43CX%7CB093LM6RDF%7CB093LMPGC9%7CB093LM86TZ%7CB093LMBJB6%7CB08RX9ZYHT%7CB08RX917N2%7CB08RX97SZX%7CB08RX977D8%7CB08RX9X8J9%7CB08RX91628%7CB097DJ82JH%7CB097DHW72L%7CB097DGSHDG%7CB097DKVMKW%7CB097DJ4VWW%7CB097DJ1TFH%7CB08HF34JDC%7CB08HDZSVZF%7CB08D3WX95J%7CB08H5LVKRD%7CB08H5L43HH%7CB083GMX4B7%7CB099ZRK1G4%7CB08ZYNM7X4%7CB08ZYPBSSH%7CB08ZYNZVLW%7CB08ZYNXS5V&crid=2RQH959A4BDLH&qid=1643046266&rnid=3837712031&sprefix=%2Celectronics%2C204&smid=A14CZOWI0VEHLG&pf_rd_r=500PGY21D0FYWQF80EQR&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pd_rd_r=c396d6d7-40ed-4ebc-840f-f4d3913c0659&pd_rd_w=4Q6Th&pd_rd_wg=fP2n9&ref_=pd_gw_unk",
              price:"1200"
          }}></ProductCatalog>
        <ProductCatalog
            details={{
                imgSource:"https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w=",
                prodLink:"https://www.amazon.in/s?i=electronics&bbn=976419031&rh=p_6%3AA14CZOWI0VEHLG%2Cp_89%3AMivi&hidden-keywords=B093LN43CX%7CB093LM6RDF%7CB093LMPGC9%7CB093LM86TZ%7CB093LMBJB6%7CB08RX9ZYHT%7CB08RX917N2%7CB08RX97SZX%7CB08RX977D8%7CB08RX9X8J9%7CB08RX91628%7CB097DJ82JH%7CB097DHW72L%7CB097DGSHDG%7CB097DKVMKW%7CB097DJ4VWW%7CB097DJ1TFH%7CB08HF34JDC%7CB08HDZSVZF%7CB08D3WX95J%7CB08H5LVKRD%7CB08H5L43HH%7CB083GMX4B7%7CB099ZRK1G4%7CB08ZYNM7X4%7CB08ZYPBSSH%7CB08ZYNZVLW%7CB08ZYNXS5V&crid=2RQH959A4BDLH&qid=1643046266&rnid=3837712031&sprefix=%2Celectronics%2C204&smid=A14CZOWI0VEHLG&pf_rd_r=500PGY21D0FYWQF80EQR&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pd_rd_r=c396d6d7-40ed-4ebc-840f-f4d3913c0659&pd_rd_w=4Q6Th&pd_rd_wg=fP2n9&ref_=pd_gw_unk",
                price:"1200"
            }}></ProductCatalog>
      </div>
      */
    <div>
      <ProductCatalogClass ></ProductCatalogClass>
    </div>
  )
}