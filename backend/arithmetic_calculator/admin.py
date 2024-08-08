from django.contrib import admin
from .models import (
    CalculationHistory,
    CloudSetting,
    Operation,
    SecuritySetting,
    UserPreference,
)

admin.site.register(UserPreference)
admin.site.register(CloudSetting)
admin.site.register(SecuritySetting)
admin.site.register(CalculationHistory)
admin.site.register(Operation)

# Register your models here.
