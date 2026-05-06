
    function hitungLuas() {
      let sisi= document.getElementById("nilailuas").value;
      if (sisi === "" || sisi <=0){
        alert("masukan nilai sisi yang valid");
        return;
      }
      let hasil= sisi * sisi;
      document.getElementById("hasilLuas").innerHTML=`rumus:${sisi}x${sisi}<br> hasil;
      ${hasil}`;
    }
    

    function hitungkeliling() {
      let sisi= document.getElementById("nilaikeliling").value;
      if (sisi === "" || sisi <=0){
        alert("masukan nilai sisi yang valid");
        return;
      }
      let hasil= 4 * sisi;
      document.getElementById("hasilkeliling").innerHTML=`rumus: 4 x${sisi}<br> hasil;
      ${hasil}`;
    }