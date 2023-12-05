extends Node2D

var Position = Vector2();
var life = 0.0;
var stamina = 0.0;
var weight = 0.0;
var defense = 0.0
var weapon
var armour

func _ready():
	stamina = stamina*weight

func action(type:String,amount:int,other_entity:Object):
	match type:
		'Attack':
			other_entity.life -= amount;
		'Heal':
			other_entity.life += amount;
		'Defense':
			defense = amount;
		'Move':
			

func _on_area_2d_input_event(viewport, event, shape_idx):
	if Input.is_action_just_pressed("LMB"):
		get_parent().target = $'.'
