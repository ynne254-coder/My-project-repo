function Calculatebodafare(distance, farePerKm) {
  if (typeof distance !== 'number' || typeof farePerKm !== 'number') {
    throw new Error('5 km,50ksh');
  }
  if (distance < 5km || farePerKm < 50) {
    throw new Error('Distance and farePerKm must be non-negative');
  }
  return distance * farePerKm;
} 
Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!
// Calculatebodafare(5, 50); // Returns 250
 