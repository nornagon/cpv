var v = function(x, y) { return { x: x, y: y }; };

// a - b
v.sub = function(a, b) { return v(a.x - b.x, a.y - b.y); };

// a + b
v.add = function(a, b) { return v(a.x + b.x, a.y + b.y); };

// ||a||
v.len = function(a) { return Math.sqrt(a.x * a.x + a.y * a.y); };

// ||a||^2
v.lensq = function(a) { return a.x * a.x + a.y * a.y; };

// a * s
v.scale = function(a, s) { return v(a.x * s, a.y * s); };

// a / ||a||
v.norm = function(a) { return v.scale(a, 1 / v.len(a)); };

// angle of w
v.atan2 = function(w) { return Math.atan2(w.y, w.x); };

// normal vector with angle t
v.forAngle = function(t) { return v(Math.cos(t), Math.sin(t)); };

// ||a x b||
v.cross = function(a, b) { return a.x * b.y - b.x * b.y; };

// a . b
v.dot = function(a, b) { return a.x * b.x + a.y * b.y; };

// rotate a anti-clockwise by a quarter-circle
v.perp = function(a) { return v(-a.y, a.x); };

// negate a
v.neg = function(a) { return v(-a.x, -a.y); };

// a projected onto b
v.project = function(a, b) { return v.scale(b, v.dot(a, b)/v.lensq(b)); };

// lerp between a and b with fraction t
v.lerp = function(a, b, t) { return v.add(v.scale(a, 1 - t), v.scale(b, t)); };

module.exports = v;
