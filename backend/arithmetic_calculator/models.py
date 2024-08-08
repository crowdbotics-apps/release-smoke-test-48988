from django.conf import settings
from django.db import models


class UserPreference(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="userpreference_user",
    )
    theme = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )
    dark_mode = models.BooleanField(
        null=True,
        blank=True,
    )
    high_contrast_mode = models.BooleanField(
        null=True,
        blank=True,
    )
    text_to_speech = models.BooleanField(
        null=True,
        blank=True,
    )
    speech_to_text = models.BooleanField(
        null=True,
        blank=True,
    )
    font_size = models.IntegerField(
        null=True,
        blank=True,
    )
    color_blind_mode = models.BooleanField(
        null=True,
        blank=True,
    )
    keyboard_navigation = models.BooleanField(
        null=True,
        blank=True,
    )
    vibration_feedback = models.BooleanField(
        null=True,
        blank=True,
    )
    sound_feedback = models.BooleanField(
        null=True,
        blank=True,
    )
    language = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )
    custom_precision = models.IntegerField(
        null=True,
        blank=True,
    )
    custom_formulas = models.TextField(
        null=True,
        blank=True,
    )


class CloudSetting(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="cloudsetting_user",
    )
    cloud_storage_enabled = models.BooleanField(
        null=True,
        blank=True,
    )
    real_time_updates = models.BooleanField(
        null=True,
        blank=True,
    )
    collaborative_mode = models.BooleanField(
        null=True,
        blank=True,
    )
    cross_device_sync = models.BooleanField(
        null=True,
        blank=True,
    )


class SecuritySetting(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="securitysetting_user",
    )
    two_factor_authentication = models.BooleanField(
        null=True,
        blank=True,
    )
    biometric_authentication = models.BooleanField(
        null=True,
        blank=True,
    )
    data_anonymization = models.BooleanField(
        null=True,
        blank=True,
    )
    privacy_settings = models.TextField(
        null=True,
        blank=True,
    )


class CalculationHistory(models.Model):
    "Generated Model"
    operation = models.CharField(
        max_length=255,
    )
    result = models.CharField(
        max_length=255,
    )
    timestamp = models.DateTimeField(
        null=True,
        blank=True,
    )


class Operation(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=50,
    )
    description = models.TextField()


# Create your models here.
