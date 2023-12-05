extends Node2D

var entities_managed = 0
var actual_entity = 0
var allentity = []


func sortbyspeed(somearray: Array):
	for entity in somearray.size():
		for zeta in somearray.size():
			if(somearray[zeta + 1].weight < somearray[zeta].weight):
				var aux = somearray[zeta]
				somearray[zeta] = somearray[zeta + 1]
				somearray[zeta + 1] = aux
				aux.free()

func findentity():
	for entity in get_node("Entities").get_child_count():
		allentity.push_back(get_node("Entities").get_child(entity))
	entities_managed = allentity.size()
		
func organizeandtest(allentity: Array):
	sortbyspeed(allentity)
	

func turngo(allentity):
	#INFO -> this guy, when called, will force the actual_entity to act and increase it. 
	#await( allentity[actual_entity].activate(), "done" ) #FIXME
	actual_entity += 1
	if actual_entity > (allentity.size() - 1):
		actual_entity = 0

# Called when the node enters the scene tree for the first time.

#func _ready():
#	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
