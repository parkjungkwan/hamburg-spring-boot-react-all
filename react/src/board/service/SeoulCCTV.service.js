const getAllCctvs = () => {
    axios.get(`/data/SeoulCCTV.json`)
    .then(res=>{
      setItems(res.data.DATA)
    })
    .catch(err => {})
  }