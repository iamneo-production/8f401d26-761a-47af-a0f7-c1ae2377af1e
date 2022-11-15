from fastapi import FastAPI
import pandas as pd
import pickle
from pydantic import BaseModel

app = FastAPI()

# with open('model', 'rb') as f:
#     model = pickle.load(f)
    
@app.get("/")
async def hello():
    return {"Hello":"WORLD!"}

@app.get("/model")  
async def predict(): 
    return{"three_month":'27%',"six_month":'30%',"nine_month":'40%'}