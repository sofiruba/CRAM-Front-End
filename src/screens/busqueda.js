<input placeholder="Buscar" onChangeText={text=>tinstallReactHook.searchFilterFunctoString(text)}/>

searchFilterFunction=text=>{
    this.setState({
        value:text,
      } );
      const newData=this.state.Items.filter(item=>{
          const itemData=`${item.NombreCompleto.toUpperCase()}${item.CorreoElectronico.toUpperCase()}${item.Id}`;
          const textData=textData=text.toUpperCase();
          return itemData.indexOf(textData)>-1;     
      });
      this.setState({
          items:newData,
      } );
};