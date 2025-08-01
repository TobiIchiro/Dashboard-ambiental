import pandas as pd
import os

def combinarCSVAire(ruta):

    datos = pd.DataFrame({})
    scriptDir = os.path.dirname(os.path.abspath(__file__))
    rutaDatos = os.path.join(scriptDir, ruta)

    for archivo in os.listdir(rutaDatos):
        if archivo != "Estaciones.csv":
            df = pd.read_csv(os.path.join(rutaDatos,archivo))
            df["Estación"] = archivo.split("-")[1]
            df[["Hora Inicial", "Hora Final"]] = df["Hora"].str.split(" - ", expand=True)
            datos =pd.concat([datos,df], ignore_index=True)
    
    datos = datos[["Estación", "Parámetro", "Fecha", "Hora Final", "Valor", "Unidad"]]
    datos.rename(columns={"Hora Final": "Hora"})
    datos.to_json(os.path.join(rutaDatos,f"datosProcesados{ruta}.json"), orient="records",force_ascii=False, indent=4)

        
