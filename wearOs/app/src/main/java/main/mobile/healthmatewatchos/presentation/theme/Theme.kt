package main.mobile.healthmatewatchos.presentation.theme

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.wear.compose.material.Colors
import androidx.wear.compose.material.MaterialTheme
import androidx.wear.compose.material.Typography

@Composable
fun HealthMateWatchOSTheme(
    content: @Composable () -> Unit
) {
    val colors = Colors(
        primary = Color.White,
        primaryVariant = Color.LightGray,
        secondary = Color.Gray,
        secondaryVariant = Color.DarkGray,
        background = Color.Black,
        surface = Color.Black,
        onPrimary = Color.Black,
        onSecondary = Color.White,
        onSurface = Color.White,
    )

    MaterialTheme(
        colors = colors,
        typography = Typography(), // Use defaults
        content = content
    )
}
