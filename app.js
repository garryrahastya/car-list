const form = document.querySelector('form');
        const tombolSimpan = document.querySelector('#tombol-simpan');
        const tombolReset = document.querySelector('#tombol-reset');
        const tabelData = document.querySelector('#tabel-data');
        let data = [];

        function tampilkanData() {
            tabelData.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                const row = tabelData.insertRow(-1);
                const cellcarId = row.insertCell(0);
                const cellBrand = row.insertCell(1);
                const cellModel = row.insertCell(2);
                const cellYear = row.insertCell(3);
                const cellType = row.insertCell(4);
                const cellNotes = row.insertCell(5);
                const cellAksi = row.insertCell(6);

                cellcarId.innerHTML = data[i].carId;
                cellBrand.innerHTML = data[i].brand;
                cellModel.innerHTML = data[i].model;
                cellYear.innerHTML = data[i].year;
                cellType.innerHTML = data[i].type;
                cellNotes.innerHTML = data[i].notes;

                
                const tombolHapus = document.createElement('button');
                tombolHapus.type = 'button';
                tombolHapus.classList.add('btn', 'btn-danger', 'mx-1');
                tombolHapus.innerHTML = 'Hapus';
                tombolHapus.addEventListener('click', function() {
                    hapusData(i);
                });
    
                
                cellAksi.appendChild(tombolHapus);
            }
        }
    
        function simpanData() {
            const carId = document.querySelector('#carId').value;
            const brand = document.querySelector('#brand').value;
            const model = document.querySelector('#model').value;
            const year = document.querySelector('#year').value;
            const type = document.querySelector('#type').value;
            const notes = document.querySelector('#notes').value;
    
            const newData = {
                carId,
                brand,
                model,
                year,
                type,
                notes
            };
    
            if (!validasiData(newData)) {
                return;
            }
    
            data.push(newData);
            localStorage.setItem('data', JSON.stringify(data));
            tampilkanData();
            resetForm();
        }
    
        function validasiData(newData) {
            const carId = newData.carId.trim();
            const brand = newData.brand.trim();
            const model = newData.model.trim();
            const year = newData.year.trim();
            const type = newData.type.trim();
            const notes = newData.notes.trim();
            var idError = document.getElementById("id-error");
            var brandError = document.getElementById("brand-error");
            var modelError = document.getElementById("model-error");
            var yearError = document.getElementById("year-error");
            var typeError = document.getElementById("type-error");

            if (!carId && !brand && !model && !year && !type) {
                idError.innerHTML = "ID must be Filled out!";
                idError.style.display = "block";
                document.getElementById("carId").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    idError.style.display = "none"
                    document.getElementById("carId").classList.remove("is-invalid", "shake");
                }, 5000);

                brandError.innerHTML = "Brand must be Filled out!";
                brandError.style.display = "block";
                document.getElementById("brand").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    brandError.style.display = "none"
                    document.getElementById("brand").classList.remove("is-invalid", "shake");
                }, 5000);

                modelError.innerHTML = "Model must be Filled out!";
                modelError.style.display = "block";
                document.getElementById("model").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    modelError.style.display = "none"
                    document.getElementById("model").classList.remove("is-invalid", "shake");
                }, 5000);

                yearError.innerHTML = "Year of the car must be Filled out!";
                yearError.style.display = "block";
                document.getElementById("year").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    yearError.style.display = "none"
                    document.getElementById("year").classList.remove("is-invalid", "shake");
                }, 5000);

                typeError.innerHTML = "Type must be Filled out!";
                typeError.style.display = "block";
                document.getElementById("type").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    typeError.style.display = "none"
                    document.getElementById("type").classList.remove("is-invalid", "shake");
                }, 5000);
                 return

             } 
             
             if(!carId) {
                idError.innerHTML = "ID must be Filled out!";
                idError.style.display = "block";
                document.getElementById("carId").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    idError.style.display = "none"
                    document.getElementById("carId").classList.remove("is-invalid", "shake");
                }, 5000);
             }

             if (!brand) {
                brandError.innerHTML = "Brand must be Filled out!";
                brandError.style.display = "block";
                document.getElementById("brand").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    brandError.style.display = "none"
                    document.getElementById("brand").classList.remove("is-invalid", "shake");
                }, 5000);
             }

             if (!model) {
                modelError.innerHTML = "Model must be Filled out!";
                modelError.style.display = "block";
                document.getElementById("model").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    modelError.style.display = "none"
                    document.getElementById("model").classList.remove("is-invalid", "shake");
                }, 5000);
             }

             if (!year) {
                yearError.innerHTML = "Year of your car must be Filled out!";
                yearError.style.display = "block";
                document.getElementById("year").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    yearError.style.display = "none"
                    document.getElementById("year").classList.remove("is-invalid", "shake");
                }, 5000);
             }

             if (!type) {
                typeError.innerHTML = "Type must be Filled out!";
                typeError.style.display = "block";
                document.getElementById("type").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    typeError.style.display = "none"
                    document.getElementById("type").classList.remove("is-invalid", "shake");
                }, 5000);
             }
             


            if ( carId === '') {
                idError.innerHTML = "ID must be Filled out!";
                idError.style.display = "block";
                document.getElementById("carId").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    idError.style.display = "none"
                    document.getElementById("carId").classList.remove("is-invalid", "shake");
                }, 5000);
                return false;
            } else {
                idError.innerHTML = "";
                document.getElementById("carId").classList.remove("is-invalid", "shake");
                document.getElementById("carId").classList.add("is-valid");
                setTimeout(function() {
                    idError.style.display = "none"
                    document.getElementById("carId").classList.remove("is-valid");
                }, 5000);
            }
            if ( brand === '') {
                brandError.innerHTML = "Brand must be Filled out!";
                brandError.style.display = "block";
                document.getElementById("brand").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    brandError.style.display = "none"
                    document.getElementById("brand").classList.remove("is-invalid", "shake");
                }, 5000);
                return false;
            } else {
                brandError.innerHTML = "";
                document.getElementById("brand").classList.remove("is-invalid", "shake");
                document.getElementById("brand").classList.add("is-valid");
                setTimeout(function() {
                    brandError.style.display = "none"
                    document.getElementById("brand").classList.remove("is-valid");
                }, 5000);
            }
            if ( model === '') {
                modelError.innerHTML = "mModel must be Filled out!";
                modelError.style.display = "block";
                document.getElementById("model").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    modelError.style.display = "none"
                    document.getElementById("model").classList.remove("is-invalid", "shake");
                }, 5000);
                return false;
            } else {
                modelError.innerHTML = "";
                document.getElementById("model").classList.remove("is-invalid", "shake");
                document.getElementById("model").classList.add("is-valid");
                setTimeout(function() {
                    modelError.style.display = "none"
                    document.getElementById("model").classList.remove("is-valid");
                }, 5000); 
            }

            if ( year === '') {
                yearError.innerHTML = "Year must be Filled out!";
                yearError.style.display = "block";
                document.getElementById("year").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    yearError.style.display = "none"
                    document.getElementById("year").classList.remove("is-invalid", "shake");
                }, 5000);
                return false;
            } else {
                yearError.innerHTML = "";
                document.getElementById("year").classList.remove("is-invalid", "shake");
                document.getElementById("year").classList.add("is-valid");
                setTimeout(function() {
                    yearError.style.display = "none"
                    document.getElementById("year").classList.remove("is-valid");
                }, 5000); 
            }

            if ( type === '') {
                typeError.innerHTML = "Type must be Filled out!";
                typeError.style.display = "block";
                document.getElementById("type").classList.add("is-invalid", "shake");
                setTimeout(function() {
                    typeError.style.display = "none"
                    document.getElementById("type").classList.remove("is-invalid", "shake");
                }, 5000);
                return false;
            } else {
                typeError.innerHTML = "";
                document.getElementById("type").classList.remove("is-invalid", "shake");
                document.getElementById("type").classList.add("is-valid");
                setTimeout(function() {
                    typeError.style.display = "none"
                    document.getElementById("type").classList.remove("is-valid");
                }, 5000);
            }

            for (let i = 0; i < data.length; i++) {
                if (carId === data[i].carId) {
                    idError.innerHTML = "ID has been taken";
                    idError.style.display = "block";
                    document.getElementById("carId").classList.add("is-invalid", "shake");
                    setTimeout(function() {
                        idError.style.display = "none"
                        document.getElementById("carId").classList.remove("is-invalid", "shake");
                    }, 5000);
                    return false;
                }
            }
            
            return true;
        }
        
        // function editData(index) {
        //     const newData = data[index];
        //     document.querySelector('#nama').value = newData.nama;
        //     document.querySelector('#email').value = newData.email;
        //     document.querySelector('#alamat').value = newData.alamat;
    
        //     tombolSimpan.innerHTML = 'Update';
        //     tombolSimpan.removeEventListener('click', simpanData);
        //     tombolSimpan.addEventListener('click', function() {
        //         updateData(index);
        //     });
        // }
    
        function updateData(index) {
            const carId = document.querySelector('#carId').value;
            const brand = document.querySelector('#brand').value;
            const model = document.querySelector('#model').value;
            const year = document.querySelector('#year').value;
            const type = document.querySelector('#type').value;
            const notes = document.querySelector('#notes').value;
    
            const newData = {
                carId,
                brand,
                model,
                year,
                type,
                notes
            };
    
            if (!validasiData(newData)) {
                return;
            }
    
            data[index] = newData;
            localStorage.setItem('data', JSON.stringify(data));
            tampilkanData();
            resetForm();
        }
    
        function hapusData(index) {
            const konfirmasi = confirm(`Apakah anda yakin ingin menghapus data ${data[index].brand}?`);
            if (konfirmasi) {
                data.splice(index, 1);
                localStorage.setItem('data', JSON.stringify(data));
                tampilkanData();
            }
        }
    
        function resetForm() {
            document.querySelector('#carId').value = '';
            document.querySelector('#brand').value = '';
            document.querySelector('#model').value = '';
            document.querySelector('#year').value = '';
            document.querySelector('#type').value = '';
            document.querySelector('#notes').value = '';
    
            tombolSimpan.innerHTML = 'Simpan';
            tombolSimpan.removeEventListener('click', updateData);
            tombolSimpan.addEventListener('click', simpanData);
        }
    
        function init() {
            const dataLocalStorage = localStorage.getItem('data');
            if (dataLocalStorage) {
                data = JSON.parse(dataLocalStorage);
                tampilkanData();
            }
        }
    
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            simpanData();
        });
    
        tombolReset.addEventListener('click', function() {
            resetForm();
        });
    
        init();
   
    