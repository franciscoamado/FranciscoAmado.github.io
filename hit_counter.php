<?php 

function hit(){
/** 
 * Create an empty text file called counterlog.txt and  
 * upload to the same directory as the page you want to  
 * count hits for. 
 *  
 * Add this line of code on your page: 
 * <?php include "hit_counter.php"; ?> 
 */ 

 echo("chegou");
// Open the file for reading 
$fp = fopen("counterlog.txt", "r"); 

// Get the existing count 
$count = fread($fp, 1024); 

// Close the file 
fclose($fp); 

// Add 1 to the existing count 
$count = $count + 1; 

// Display the number of hits 
// If you don't want to display it, comment out this line 
echo "<p>Page views:" . $count . "</p>"; 

// Reopen the file and erase the contents 
$fp = fopen("counterlog.txt", "w"); 

// Write the new count to the file 
fwrite($fp, $count); 

// Close the file 
fclose($fp); 
}
?> 