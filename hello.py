from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')
messages = []

@socketio.on('message')
def handle_message(msg):
    print('Message: ' + msg)
    emit('message', "Message Received")

@socketio.on('connect')
def check_connect():
    print("Connected Idiot")

if __name__ == '__main__':
    socketio.run(app, debug=True)