extends Node2D

var global = GlobalScript

var Position = Vector2();
var life = 0.0;
var stamina = 0.0;
var weight = 0.0;
var defense = 0.0
var weapon
var armour
var enemy
var damage = 10
var areas_inside = []

func _ready():
	life = global.player_life
	weight = global.player_weight
	stamina = global.player_stamina
	stamina = stamina*weight

func action(type:String,amount:int,other_entity:Object):
	match type:
		'Attack':
			other_entity.life -= amount;
			if other_entity.life <= 0:
				other_entity.queue_free()
		'Heal':
			other_entity.life += amount;
		'Defense':
			defense = amount;
		'Move':
			pass
		'FindCover':
			pass

func _on_button_pressed():
	if get_parent().target != null:
		action('Attack',damage,get_parent().get_node("Entity"))
		print(get_parent().get_node("Entity").life)

func _on_area_2d_2_area_entered(area):
	if area.is_in_group("Enemy"):
		areas_inside.push_back(area)

func _on_area_2d_2_area_exited(area):
	if area.is_in_group("Enemy"):
		areas_inside.remove_at(areas_inside.find(area))
