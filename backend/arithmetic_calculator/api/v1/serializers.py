from rest_framework import serializers
from arithmetic_calculator.models import (
    CalculationHistory,
    CloudSetting,
    Operation,
    SecuritySetting,
    UserPreference,
)


class UserPreferenceSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserPreference
        fields = "__all__"


class CloudSettingSerializer(serializers.ModelSerializer):

    class Meta:
        model = CloudSetting
        fields = "__all__"


class SecuritySettingSerializer(serializers.ModelSerializer):

    class Meta:
        model = SecuritySetting
        fields = "__all__"


class CalculationHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = CalculationHistory
        fields = "__all__"


class OperationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Operation
        fields = "__all__"
