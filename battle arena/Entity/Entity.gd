extends Node2D

@onready var UI = get_parent().get_parent().get_node("Fight_UI")
@onready var player = get_parent().get_parent().get_node("Players").get_node("Player")

var life = 100
var stamina = 0.0
var weight = 0.0
var defense = 0.0
var weapon
var armour

var action_type = [10,5]
var action_use = 0

func _ready():
	stamina = stamina*weight


func use_action():
	randomize()
	action_use = int(randf_range(0,2))
	if action_use == 2:
		action_use = 1
	if action_use == 1:
		action(action_use,$'.')
	else:
		action(action_use,player)
	

func action(type:int,other_entity:Object):
	match type:
		0:
			other_entity.life -= action_type[action_use];
			if other_entity.life <= 0:
				other_entity.queue_free()
			print(other_entity.life)
		1:
			other_entity.life += action_type[action_use]
	UI.pass_turn()

func _on_button_pressed():
	UI.use_action($'.')
