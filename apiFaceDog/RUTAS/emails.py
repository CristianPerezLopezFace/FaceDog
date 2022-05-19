
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from fastapi import HTTPException
from fastapi.responses import HTMLResponse
from ssl import create_default_context
import ssl
from fastapi.routing import APIRouter
import smtplib
import conexion


rutasEmails = APIRouter()


@rutasEmails.get('/confirmarEmail/',
            response_description='Get one user',
            summary='',
            tags=['users']
            )
def confirmarEmail(email:str):
    html = """
                <html>
                    <head>
                        <title>Civi-cancelaciones :(</title>
                    </head>
                    <body>
                            <h1>Cuenta confirmada</h1>
                            <script>
                                window.location.replace("http://localhost:4200")
                            </script>
                    </body>
                </html>
            """

    try:
        print(email)
        oldUser = conexion.conexion.find_one({"email": email})
        
        user =  dict(oldUser)
        user.update({'habilitado': 1})
        newUser = {
            "$set": dict(user)
        }
        conexion.conexion.update_one(oldUser, newUser)

    except:
        raise HTTPException(
            status_code=404, detail="The id entered is not wrong")
    return HTMLResponse(html, status_code=200)



