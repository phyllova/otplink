<?php
// Simulated vote submission

// Assuming the user selects a candidate
$candidate = $_POST['candidate'];

if (!empty($candidate)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'failed']);
}
?>
