extends Node2D

var global = GlobalScript
@onready var UI = get_parent().get_parent().get_node("Fight_UI")

var max_life = 100.0
var Position = Vector2();
var life = 0.0;
var stamina = 0.0;
var weight = 0.0;
var defense = 0.0
var weapon
var armour
var enemy

var amounts = [10,5,5]
var effect_type = 0

func _ready():
	life = global.player_life
	weight = global.player_weight
	stamina = global.player_stamina
	stamina = stamina*weight

func action(other_entity:Object,effect:int):
	effect_type = effect
	match effect:
		0:
			other_entity.life -= amounts[effect_type];
			if other_entity.life <= 0:
				other_entity.queue_free()
		1:
			if life != max_life:
				if (life + amounts[effect_type] < max_life):
					other_entity.life += amounts[effect_type];
				else:
					life = max_life
		2:
			defense = amounts[effect_type];
		3:
			pass
	UI.pass_turn()

func _on_button_pressed():
	UI.use_action($'.')
