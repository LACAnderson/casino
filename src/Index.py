import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('<a href="/profile/alice">alice</a><br>')
        self.write('<a href="/profile/bob">bob</a><br>')
        self.write('<a href="/profile/carol">carol</a><br>')
        self.write('<a href="/profile/dave">dave</a><br>')  
        self.write('<a href="/static/rou.html">Click to enter Casino</a><br>')                      