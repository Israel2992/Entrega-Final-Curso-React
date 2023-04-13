
//mediante este codigo puedo simular la llamada a una API (que trae informacion de producto)

//para lo cual utilizo una promise que se compone y este a su vez contiene un serTimeout que lo que hace es que los valores o el array ejecute despues de un tiempo

const [listProduts, setListProduts] = useState([]);

useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {        // la fnc setTimeut se efecuta desde un cierto tiempo
        resolve([
          {
            img: `https://http2.mlstatic.com/D_NQ_NP_701497-MLA31130240139_062019-W.jpg`,
            text: "Camisa",
            cantidad: 10,
          },
          {
            img: `https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf3a.png`,
            text: "Pantalon",
            cantidad: 15,
          },
          {
            img: `https://www.duracolor.co/components/com_virtuemart/shop_image/product/resized/Buso_con_capota__5dbb41e068cbf_233x233.jpg`,
            text: "Buso",
            cantidad: 20,
          },
        ]);
      }, 5000);     // aqui se puede ver que esta para 5 segundos
    })
      // .then ejecuta en caso de la resolucion exitosa del promise y pueden haber varios
      .then((result) => {setListProduts(result)})
      
      // esto muestra un mensaje de error en caso tal 
      .catch(() => {console.log("ups algo fallo")})
  }, []);



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////