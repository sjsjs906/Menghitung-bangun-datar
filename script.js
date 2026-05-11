
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



    
    function hitungluas() {
      let lebar= document.getElementById("llebar").value;
      let panjang= document.getElementById("lpanjang").value;
      if (panjang === "" || lebar||panjang<=0 || lebar <=0){
        alert("masukan nilai sisi yang valid");
        return;
      }
      let hasil= panjang * lebar;
      document.getElementById("hasil").innerHTML=`rumus: $(panjang) x${lebar}<br> hasil;
      ${hasil}`;
    }

  