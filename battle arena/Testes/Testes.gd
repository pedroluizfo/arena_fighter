extends Node2D

var area_index = 0
var target

func _ready():
	$Entity.life = 100.0

func _on_button_pressed():
	$Player.position = $Map.areas[area_index].position
